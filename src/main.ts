import App from './guarantee.svelte'

let target = document.getElementById('guarantee-wrapper') || document.body

const app = new App({
	target,
	props: {
		name: 'world'
	}
});

export default App;
