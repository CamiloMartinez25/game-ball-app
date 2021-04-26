import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input-amount',
  templateUrl: './form-input-amount.component.html',
  styleUrls: ['./form-input-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputAmountComponent),
      multi: true,
    },
  ],
})
export class FormInputAmountComponent implements ControlValueAccessor {
  @ViewChild('inputText') public inputTextRef: ElementRef;
  @Input() public isInvalid: boolean;
  @Input() public placeholder: string;
  @Input() public readonly: boolean;
  @Input() public max: number;
  @Input() public min: number;
  @Input() public type: string;
  @Input() public autocomplete: string;
  public currentValue: string | number;
  public isDisabled: boolean;
  public onChange: any;
  public onTouch: any;
  private isFocusValue: boolean;

  get isFocus(): boolean {
    return this.isFocusValue;
  }

  get maskOptions(): { [key: string]: any } {
    return {
      mask: '€num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ',',
          scale: 2,
          radix: '.',
          mapToRadix: ['.'],
        },
      },
    };
  }

  constructor(private cdRef: ChangeDetectorRef) {
    this.placeholder = '';
    this.currentValue = '';
    this.onChange = (_: any) => { };
    this.onTouch = () => { };
  }

  handleFocus(): void {
    this.inputTextRef.nativeElement.focus();
    this.inputTextRef.nativeElement.select();
    this.isFocusValue = true;
    this.cdRef.markForCheck();
    this.onTouch();
  }

  handleBlur(): void {
    this.isFocusValue = false;
  }

  handleChange(value: string | number): void {
    this.currentValue = value;
    this.onChange(this.currentValue);
    this.onTouch();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: string | number): void {
    this.initializeValue(value);
    this.cdRef.markForCheck();
  }

  private initializeValue(value: string | number): void {
    this.currentValue = value;
    if (value) { this.onTouch(); }
  }
  

  handleUnmask(value: string): void {
    const unmask = value.replace(/\€/g, '').replace(/\,/g, '');
    this.handleChange(Number(unmask));
  }

  handleKeypress(key: string): boolean {
    const pattern = /[0-9]|\./;
    return pattern.test(key);
  }

}
