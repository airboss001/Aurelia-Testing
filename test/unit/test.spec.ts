import * as chai from 'chai';
import { expect, assert } from 'chai';
import { setup } from 'mocha';

import { App } from "app";

setup(() =>
{
    chai.should();
    chai.use(require('chai-datetime'));
});

describe('Sayings Greeter', () =>
{
    it('should be defined', () =>
    {
        assert(expect !== undefined, "expect undefined");
        expect(this.should, "should is undefined").to.not.be.undefined;
        'foo'.should.equal('foo');
    });

    it('should greet', () =>
    {
        var greeter = { name: 'John' };
        expect(greeter.name).to.equal('John');
    });
});

describe('App message', () =>
{
    var app = new App();

    it('should be defined', () =>
    {
        assert(app.message !== undefined, "expect undefined");
    });

    it('should equal', () =>
    {
        var greeter = { name: 'John' };
        expect(app.message).to.equal('Hello World!');
    });
});