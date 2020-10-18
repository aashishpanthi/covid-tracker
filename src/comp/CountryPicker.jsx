import React,{useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../api'

import style from '../css/CountryPicker.module.css'

function CountryPicker( {countryHandler} ) {

	const [fetchedCountries, setfetchedCountries] = useState([])

	useEffect(() => {
		const fetchAPI = async () =>{
			setfetchedCountries(await fetchCountries())
		}
		fetchAPI()
	},[setfetchedCountries])

	return (
		<div className={style.container}>
			<h2>Pick up the location:</h2>
			<FormControl className={style.formControl}>
				<NativeSelect defaultValue='' onChange={(e) => countryHandler(e.target.value)}>
					<option value="">Global</option>
					{fetchedCountries.map((country,i) => <option value={country} key={i}> {country} </option>)}
				</NativeSelect>
			</FormControl>
		</div>
	)
}

export default CountryPicker