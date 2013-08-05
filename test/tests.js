describe('instantiation', function () {

    it('should create a new Visibility instance', function () {
        var instance = new Visibility();
        expect(instance instanceof window.Visibility).toBeTruthy();
    });

});

describe('callbacks', function () {

    var callback;

    beforeEach(function() {
        callback = jasmine.createSpy();
    });

    it('should fire visible callback', function () {
        var instance = new Visibility( {
            onVisible: callback
        });
        Visibility.prototype.isHidden = sinon.stub().returns(false);
        instance.visibilityChange();
        expect(callback).toHaveBeenCalled();
    });

    it('should fire hidden callback', function () {
        var instance = new Visibility( {
            onHidden: callback
        });
        Visibility.prototype.isHidden = sinon.stub().returns(true);
        instance.visibilityChange();
        expect(callback).toHaveBeenCalled();
    });

});

describe('getHiddenProp', function () {

    it('should return the hidden property', function () {
        var instance = new Visibility();
        var mock = {
            hidden: 'foo'
        };
        var prop = instance.getHiddenProp(mock);
        expect(prop).toEqual('hidden');
    });

    it('should return a vendor prefixed property if needed', function () {
        var instance = new Visibility();
        var mock = {
            webkitHidden: 'foo'
        };
        var prop = instance.getHiddenProp(mock);
        expect(prop).toEqual('webkitHidden');
    });

    it('should return null if not supported', function () {
        var instance = new Visibility();
        var mock = {};
        var prop = instance.getHiddenProp(mock);
        expect(prop).toEqual(null);
    });

});
