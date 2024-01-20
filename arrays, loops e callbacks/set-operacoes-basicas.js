function isSuperset(set, subset) {
    for (var elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function uniao(setA, setB) {
    var _uniao = new Set(setA);
    for (var elem of setB) {
        _uniao.add(elem);
    }
    return _uniao;
}

function interseccao(setA, setB) {
    var _interseccao = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _interseccao.add(elem);
        }
    }
    return _interseccao;
}

function diferencaSimetrica(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        if (_diferenca.has(elem)) {
            _diferenca.delete(elem);
        } else {
            _diferenca.add(elem);
        }
    }
    return _diferenca;
}

function diferenca(setA, setB) {
    var _diferenca = new Set(setA);
    for (var elem of setB) {
        _diferenca.delete(elem);
    }
    return _diferenca;
}

//Exemplos
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
uniao(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
interseccao(setA, setC); // => Set [3, 4]
diferencaSimetrica(setA, setC); // => Set [1, 2, 5, 6]
diferenca(setA, setC); // => Set [1, 2]
