var data_nested_deep = [{
	"name": "Eduardo Lundgren",
	"email": "edu@rdo.io",
	"address": {
		"street": {
			"name": "The Bowery",
			"coordinates": [40.574788, -73.980954]
		},
		"city": "New York"
	}
}, {
	"name": "Adélaide",
	"email": "adelaide@domain.com",
	"address": {
		"street": {
			"name": "La Pigalle",
			"coordinates": [48.882245, 2.337238]
		},
		"city": "Paris"
	}
}];

var data_nested_deep_expanded = {
	"type": "array",
	"value": [
		{
			"type": "object",
			"value": {
				"name": {
					"type": "string",
					"value": "Eduardo Lundgren"
				},
				"email": {
					"type": "string",
					"value": "edu@rdo.io"
				},
				"address": {
					"type": "object",
					"value": {
						"street": {
							"type": "object",
							"value": {
								"name": {
									"type": "string",
									"value": "The Bowery"
								},
								"coordinates": {
									"type": "array",
									"value": [
										{
											"type": "number",
											"value": 40.574788
										},
										{
											"type": "number",
											"value": -73.980954
										}
									]
								}
							}
						},
						"city": {
							"type": "string",
							"value": "New York"
						}
					}
				}
			}
		},
		{
			"type": "object",
			"value": {
				"name": {
					"type": "string",
					"value": "Adélaide"
				},
				"email": {
					"type": "string",
					"value": "adelaide@domain.com"
				},
				"address": {
					"type": "object",
					"value": {
						"street": {
							"type": "object",
							"value": {
								"name": {
									"type": "string",
									"value": "La Pigalle"
								},
								"coordinates": {
									"type": "array",
									"value": [
										{
											"type": "number",
											"value": 48.882245
										},
										{
											"type": "number",
											"value": 2.337238
										}
									]
								}
							}
						},
						"city": {
							"type": "string",
							"value": "Paris"
						}
					}
				}
			}
		}
	],
	"columns": [
		"address",
		"email",
		"name"
	]
};

export { data_nested_deep, data_nested_deep_expanded };