
       
        const serviceID = 'service_81i3fcj';  // Reemplaza con tu ID de servicio
        const templateID = 'template_8av9k18';  // Reemplaza con tu ID de plantilla
        const userID = 'CzW8clAUOL4idy_vN';  // Reemplaza con tu llave pública de EmailJS

        
        emailjs.init(userID);

        
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const data = {
                name: formData.get('from_name'),
                email: formData.get('reply_to'),
                message: formData.get('message')
            };

            
            emailjs.send(serviceID, templateID, data)
                .then(function(response) {
                    alert('¡Mensaje enviado con éxito!');
                }, function(error) {
                    alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
                    
                });
        });
