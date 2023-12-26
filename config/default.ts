export default {
	port: 1337,
	dbUri: 'mongodb://172.24.80.1:27017/restapi',
	saltWorkFactor: 10,
	accessTokenTtl: '1m',
	refreshTokenTtl: '1y',
	publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzj8kdD4GC6RE9YSpbQob
FN9h0GoeJVpInUVydwYjUrUA+ZijE+JOZHLrhnIlGcK2eOlyp85I29kEDx/6rBXM
u6+qr0sfiBpvx1TSySut5FxBQLn4WiPaz2UiSziwq8JJ6FAGDqHB7g7c1CQsuMEh
bwZjsHP/MP/ZthB+aOUeo9WSjQDankkKD0FZB0XIfvC/IXicX46eok/QzYIr/O4l
gY+Sfee12AtNqUBliJxntyCXQlB9L6GkWEK+OH/dy3VNdDS1a3knNtMf5x1Zef7v
BFtpIOOej6rmWWzXFxmCZIIwnVa1ciYkG2PmA4I/uyTVqdfBZ7gENzYQ0PWgQVf/
Bpc2y1NR3jQfwIiuvbJXsiqcV9f5404Qsg3GDzRGJj4V8r3Y1NpteZ3pcZrE4Qkk
SLETZaQP9C4DMPyKoDPJT4otoxXID9QVWJRfvhea1B8LT6T8nn35jRIizuW11ftc
WV3erYLHLGE42xHyFyS2OrifMhi7kMAww3ifmCjfEac4gZdJGuC6YkhCsVtVlDpe
cvGYHIE9G3GA03cphf25KoForiAsQNQLCUi4DmzcgBLsfVU94s/WJZTptyWGH1th
USrnIfd+4C61DrxZe+dIq3ZzVw1ttAO91ibg38XVXwxkJmhZOV5+JMPxHUzpmm8g
jDkdnomfurFnWIW0b7a+2OsCAwEAAQ==
-----END PUBLIC KEY-----
	`,
	privateKey: `-----BEGIN PRIVATE KEY-----
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
GALIyibvNmrE56LB5/CmwfprmOuLwQ==
-----END PRIVATE KEY-----
	`
};
