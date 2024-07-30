const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://playground.4geeks.com/contact",
			agenda_slug:"Vero519",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createAgenda: ()=> {
				const store = getStore()
				fetch(`${store.apiUrl}/agenda/${store.agenda_slug}`, {method: "POST"})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error))
			},
			getContacts: ()=> {
				const store = getStore()
				const actions = getActions()
				fetch(`${store.apiUrl}/agenda/${store.agenda_slug}/contacts`)
					.then(response => {
						if(response.status == 404){ 
							actions.createAgenda()
							return null
						}
						return response.json()
					})
					.then(data => {
						if (data){
							console.log(data)
							setStore({contacts: data.contacts})
						}
					})
					.catch(error => console.log(error))
			},
		}
	};
};

export default getState;
