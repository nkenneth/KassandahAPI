const publicVapidKey = 'BL_h_8yZoxNUlBRWTw7rWHMiUEtwYR8knfP6FxIOBqvUV_q9isaXg8uC7he6yowFq93zZSEJXUSq24kvfUuNX7c';


// check for service worker in navigator
if('serviceWorker' in navigator) {
    send().catch(error => console.log(error));
}

// Register service worker, register push, send push
async function send() {
    // register service worker
    console.log('registering service worker')
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/api/push/'
    });
    console.log('sevice worker registered');

    // register push
    console.log('register push');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log('push registered')

    // send push notification
    console.log('sending push')
    await fetch('api/push/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    })
    console.log('push sent!!!');

}



function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}