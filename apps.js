const images = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG']

const targetImage = document.querySelector ('.avatar img');

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        if (i === images.length - 1) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);

//shift + alt + F

    });
