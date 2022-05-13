var searchInput = document.getElementById('search');
let randomText = ['COPIED!', 'PASTE ME!', 'WILL DO!', 'GOT IT!', 'RIGHT ONE!'];
let ICONS = [];
let smile = ['😎', '😍', '😛', '😋', '😉', '😆', '🤙', '💪', '✌','👍' ,'👏'];




// ------------------> COPY ICONS <------------------

function DocumentReady() {
    document.querySelectorAll('i').forEach(function (e) {
        e.addEventListener('click', function (event) {
            document.getElementById("input").value = event.path[0].outerHTML;
            var copyText = document.getElementById("input");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);
            document.getElementById('copyIcon').innerHTML = event.path[0].outerHTML;
            document.getElementById('copyResult').innerText = randomText[parseInt(Math.random() * 4)];
            document.title = `Bootstrap-icon ${smile[parseInt(Math.random() * 10)]}`;
            copyTime();
            document.getElementById('box').classList.add('active');
        })
    });
}

function copyTime() {
    let copyText = document.getElementById('copyText');
    copyText.style.zIndex = '2';
    copyText.style.opacity = '1';
    setTimeout(() => {
        copyText.style.opacity = '0';
        copyText.style.zIndex = '-1';
        document.getElementById('box').classList.remove('active');
    }, 700)
}

// ------------------> SEARCH <------------------

document.querySelectorAll('i').forEach(function (event) {
    ICONS.push({ icon: event.className });
})

if (searchInput) {
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let result = ICONS.filter(e => {
                if (e.icon) {
                    return e.icon.toLowerCase().indexOf(event.target.value.toLowerCase()) > - 1;
                }
            })
            if (result.length !== 0) {
                let draw = result.map(e => `
                    <div class="icon">
                        <i class="${e.icon}"></i>
                        <div class="label">${e.icon.slice(6)}</div>
                    </div>
                `);
                draw = draw.join(" ");
                document.getElementById('icons').innerHTML = draw;
            } else {
                document.getElementById('icons').innerHTML = `
                    <h2> 
                        Nothing found, try searching again.
                    </h2>`
            }
            DocumentReady();
        }
        if (event.target.value === '') {
            let draw = ICONS.map(e => `
                    <div class="icon">
                        <i class="${e.icon}"></i>
                        <div class="label">${e.icon.slice(6)}</div>
                    </div>
                `);
            draw = draw.join(" ");
            document.getElementById('icons').innerHTML = draw;
            DocumentReady();
        }
    });
}

// ------------------> COPY SOURCE CODE <------------------

function copytextnpm(copyText) {
	const textArea = document.createElement('textarea');
	textArea.style.position = "absolute";
	textArea.style.top = "" + ((document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop) + "px";
	textArea.style.left = "-100%";
	textArea.textContent = copyText.trim();
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.parentNode.removeChild(textArea);
    copyTimeSourcenpm();
}

function copyTimeSourcenpm() {
    document.getElementById('clipboard-on-1').style.display = 'none';
    document.getElementById('clipboard-off-1').style.display = 'inline';
    setTimeout(()=> {
        document.getElementById('clipboard-on-1').style.display = 'inline';
        document.getElementById('clipboard-off-1').style.display = 'none';
    }, 1500)
}

function copytext(copyText) {
	const textArea = document.createElement('textarea');
	textArea.style.position = "absolute";
	textArea.style.top = "" + ((document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop) + "px";
	textArea.style.left = "-100%";
	textArea.textContent = copyText.trim();
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.parentNode.removeChild(textArea);
    copyTimeSource();
}

function copyTimeSource() {
    document.getElementById('clipboard-on-2').style.display = 'none';
    document.getElementById('clipboard-off-2').style.display = 'inline';
    setTimeout(()=> {
        document.getElementById('clipboard-on-2').style.display = 'inline';
        document.getElementById('clipboard-off-2').style.display = 'none';
    }, 1500)
}

function copylink(copyText) {
	const textArea = document.createElement('textarea');
	textArea.style.position = "absolute";
	textArea.style.top = "" + ((document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop) + "px";
	textArea.style.left = "-100%";
	textArea.textContent = copyText.trim();
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.parentNode.removeChild(textArea);
    copyTimelink();
}

function copyTimelink() {
    document.getElementById('clipboard-on-3').style.display = 'none';
    document.getElementById('clipboard-off-3').style.display = 'inline';
    setTimeout(()=> {
        document.getElementById('clipboard-on-3').style.display = 'inline';
        document.getElementById('clipboard-off-3').style.display = 'none';
    }, 1500)
}

function copystyle(copyText) {
	const textArea = document.createElement('textarea');
	textArea.style.position = "absolute";
	textArea.style.top = "" + ((document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop) + "px";
	textArea.style.left = "-100%";
	textArea.textContent = copyText.trim();
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.parentNode.removeChild(textArea);
    copyTimestyle();
}

function copyTimestyle() {
    document.getElementById('clipboard-on-4').style.display = 'none';
    document.getElementById('clipboard-off-4').style.display = 'inline';
    setTimeout(()=> {
        document.getElementById('clipboard-on-4').style.display = 'inline';
        document.getElementById('clipboard-off-4').style.display = 'none';
    }, 1500)
}

document.getElementById('mypre-3').innerText = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">'
document.getElementById('mypre-4').innerText = '@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css")'

DocumentReady();
















