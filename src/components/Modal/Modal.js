import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Welcome to Quahog!</h4>
				<ol>
					<li>Click on a Character to start.</li>
					<li>But watch out! Each Click is gonna mix up the cards!</li>
					<li>Remember who you click on because choose someone twice...You Lose!</li>
					<li>If you're perhaps a wizard or posess magical powers and are able to click on all 12 characters without repeating...You Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>C'mon Lois! Let's Play Already...</a>
			</div>
		</div>
	)
}





export default Modal;