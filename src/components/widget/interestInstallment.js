import React from 'react'
import { formatCurrency } from '../../utils/formatUtils'

export default function InterestInstallment({ value, isEnableLoanSimulation, displayInterestInstallment }) {
	return (
		<div className={`cilian ${!isEnableLoanSimulation && 'disable-loan-simulation'}`}>
			<span className='float-left'>Angsuran per Bulan</span>
			<strong className='float-right'>
				{displayInterestInstallment ? `Rp${formatCurrency(value)}` : '-'}
			</strong>
		</div>
	);
}
