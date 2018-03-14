import React from 'react'

export const Button = ({onClick}) => (
		<div className="align-center">
			<a href="#"
				onClick={onClick}
				className="btn btn-blue">
				AJUKAN SEKARANG
			</a>
		</div>
	)

export default Button
