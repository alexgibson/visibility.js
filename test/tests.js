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

    it('should return the correct hidden property if available', function () {
        var instance = new Visibility();
        var prop = instance.getHiddenProp();
        var doc = document;

        if ('hidden' in doc) {
            expect(prop).toEqual('hidden');
        } else if ('webkitHidden' in doc) {
            expect(prop).toEqual('webkitHidden');
        } else if ('mozHidden' in doc) {
            expect(prop).toEqual('mozHidden');
        } else if ('msHidden' in doc) {
            expect(prop).toEqual('msHidden');
        } else {
            expect(prop).toEqual(null);
        }
        
    });

});
