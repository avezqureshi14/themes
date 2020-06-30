module.exports = {
	plugins: [
		require( 'postcss-nested' ),
		require( 'postcss-css-variables' )({
			"preserve": false,
			"preserveAtRulesOrder": true
		}),
		require( 'postcss-calc' )
	]
}