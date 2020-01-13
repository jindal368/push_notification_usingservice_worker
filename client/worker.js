console.log('service worker Loaded');

self.addEventListener('push', e =>{

    const data = e.data.json();
    console.log('push recieved...');
    self.ServiceWorkerRegistration.showNotification(data.title,{
        body:'Notified by vishesh!',
        icon:'http://image.ibb.co/frYOFd/tmlogo.png'
    });
});