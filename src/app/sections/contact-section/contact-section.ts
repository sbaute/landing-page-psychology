import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
})
export class ContactSection {

  form!: FormGroup;

  private phone = '3415614807';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  enviar() {
    if (this.form.invalid) return;

    const { nombre, mensaje } = this.form.value;

    const texto = `Hola, soy ${nombre}.\n${mensaje}`;
    const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  }
}
