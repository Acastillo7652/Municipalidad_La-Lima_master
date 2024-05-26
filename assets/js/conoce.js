window.addEventListener('DOMContentLoaded', (event) => {
    const formContainer = document.querySelector('.google-form-container');
    const iframe = formContainer.querySelector('iframe');
    iframe.onload = () => {
        const contentWindow = iframe.contentWindow;
        contentWindow.postMessage({
            type: 'resize',
            height: document.body.scrollHeight
        }, '*');
    };
});
