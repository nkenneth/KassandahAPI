console.log('service worker loaded..');
self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('push received... ');
    self.registration.showNotification(data.title, {
        body: 'Notified by Kassandah',
        icon: 'https://kassandah.gigmobility.com/static/media/kassandah.2b462a28.PNG'
    });
})

