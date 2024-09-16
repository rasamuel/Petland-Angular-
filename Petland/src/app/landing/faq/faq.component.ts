import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  responseMessage: string = '';  // Mensaje de respuesta del formulario

  // Preguntas frecuentes
  faqs = [
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Nuestro horario de atención es de lunes a viernes de 8:00 AM a 6:00 PM y los sábados de 9:00 AM a 1:00 PM.',
      open: false
    },
    {
      question: '¿Cuál es el costo de una consulta veterinaria?',
      answer: 'El costo puede variar según el tipo de consulta y los tratamientos necesarios. Le proporcionaremos una estimación antes de realizar cualquier procedimiento.',
      open: false
    },
    {
      question: '¿Ofrecen servicios de emergencia?',
      answer: 'Sí, ofrecemos servicios de emergencia las 24 horas, los 7 días de la semana.',
      open: false
    }
  ];

  // Evitar recarga de la página al enviar el formulario
  handleFormSubmit(event: Event) {
    event.preventDefault();  // Evitar el comportamiento por defecto del formulario

    // Recoger los valores de los inputs manualmente
    const name = (event.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
    const email = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    const message = (event.target as HTMLFormElement).elements.namedItem('message') as HTMLTextAreaElement;

    // Validar y procesar los datos del formulario
    if (name.value && email.value && message.value) {
      this.responseMessage = '¡Mensaje enviado con éxito!';
    } else {
      this.responseMessage = 'Por favor, complete todos los campos.';
    }
  }

  // Alternar la visibilidad de las respuestas de FAQ
  toggleFAQ(faq: any) {
    // Cambia la propiedad 'open' al opuesto de su valor actual
    faq.open = !faq.open;
  }
}
