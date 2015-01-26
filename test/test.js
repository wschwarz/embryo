'use strict';

var request = require('superagent');
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

var app = require("../index").app;

describe('Contact Controller', function(){
	var options;

	before(function (done) {
        // Now we can start the app under test
        var url = app.listen();
        var appAddr = url.address();
        options = {
        	url: 'http://' + appAddr.address + ':' + appAddr.port
        };
        done();
    });

	describe('/contact', function(){
		it('should return the correct string', function(done) {
			request.get('localhost:3000' + '/contact', function(err, res) {
				if (err) {
					console.error(err);
					done();
				} else {					
					expect(res.text).to.contain('Contact me at wschwarz1986@gmail.com');					
					done();	
				}
			});
		});
	});

	describe('/api-product', function() {
		it('should return the correct project', function(done) {
			request.get('localhost:3000' + '/api/product', function(err, res) {
				if (err) {
					console.error(err);
					done();
				} else {					
					var productData = JSON.parse(res.text);
					expect(productData.products).to.have.length(2);					
					done();
				}
			});
		});
	});
})