import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import style from '../css/Card.module.css'

const Cards = ( { data: {confirmed, recovered, deaths, lastUpdate } } ) => {

	if(!confirmed){
		return 'loading..'
	}

	return (
		<div className={style.container}>
			<Grid container spacing={2} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
					<CardContent>

						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>

						<Typography varient="h5">
							<CountUp start={0} end={confirmed.value} duration={2} separator=',' />
						</Typography>

						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString() }
						</Typography>

						<Typography varient="body2">
							Number of active cases
						</Typography>

					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>

						<Typography varient="h5">
							<CountUp start={0} end={recovered.value} duration={2} separator=',' />
						</Typography>

						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString() }
						</Typography>

						<Typography varient="body2">
							Number of recovered cases
						</Typography>

					</CardContent>
				</Grid>

				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>

						<Typography varient="h5">
							<CountUp start={0} end={deaths.value} duration={2} separator=',' />
						</Typography>

						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString() }
						</Typography>

						<Typography varient="body2">
							Number of deaths
						</Typography>

					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards