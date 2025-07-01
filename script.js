
function showImage(imageId) {
    const overlay = document.getElementById("overlay");
        const imgElement = document.getElementById("overlay-img");
        
    overlay.style.display = "flex";
        imgElement.src = document.getElementById(imageId).src;
        
    document.body.classList.add('blur');
    }
    
function closeImage() {
    const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
            document.body.classList.remove('blur');
            }
            
function openTab(tabNumber) {
    const content = document.querySelectorAll('.tab-content');
        content.forEach((tab) => tab.style.display = 'none');
            document.getElementById('content' + tabNumber).style.display = 'block';
            }
            