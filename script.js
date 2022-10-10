"Use state";

// 1

console.log("Շուտով կպատասխանենք ձեր հարցին...")

const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Խնդրում ենք սպասեք...")
        const carsInfo = {
            name: "BMW",
            model: "E60",
            maxSpeed: 320,
        }
    
        resolve(carsInfo)
        reject();
    }, 5000)
});

promise.then((info)=> {
    console.log(info);
}).then((data)=>{
    data = "Ձեր ուղղարկած տվյալներով միայն այս մեկն է:";
    console.log(data)
}).catch(() => {
	throw new Error("Տեղի է ունեցել սխալ, փորձեք մի փոքր ուշ:");
}).finally(() => {
    console.log("Շնորհակալություն մեր ծառայությունից օգտվելու համար:");
});


// 2

function racePromise (){
	const promise1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("1");
			reject();
		}, 500);
		
	});
	  
	const promise2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("2");
			reject();
		}, 1000);
		
	});

	const promise3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("3");
			reject();
		}, 200);
		
	});

	const promise4 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("4");
			reject();
		}, 800);
		
	});

	const promise5 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("5");
			reject();
		}, 600);
		
	});

	return Promise.race([promise1, promise2, promise3, promise4, promise5]).then((value) => {
		console.log(`Առաջին տեղում հանդես է գալիս համար ${value} Promise`);
  	}).catch(() => {
		throw new Error("Տեղի է ունեցել խնդիր արդյունքները կհայտարարենք մի փոքր ուշ:");
	}).finally(() => {
		console.log("Շնորհակալություն մասնակցության համար:");
	});
}

racePromise();
  