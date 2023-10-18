const url = 'http://it-its.id/api/movies';
const options = {
	method: 'GET',
};

async function GETdata(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result.description;
        console.log(data);
        data.forEach(item => {
            const output = `<div> ${item.TITLE} </div>`;
            document.querySelector('.movies').innerHTML+= output;
        });
    } catch (error) {
        console.error(error);
    }
}

GETdata();