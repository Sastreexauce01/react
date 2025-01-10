
import { useState } from 'react'
import '../styles/Carte.css'

function Carte() {
	const monsteraPrice = 8
	const [carte, updateCarte] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-carte'>
			<button
				className='lmj-carte-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCarte(carte + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * carte}€</h3>

			<button onClick={()=> updateCarte(0)}>
				Vider le panier
			</button>
		</div>
	) : (
		<div className='lmj-carte-closed'>
			<button
				className='lmj-carte-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>git
		</div>
	)
}

export default Carte
