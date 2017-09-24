class TicTacToe {
    constructor() {
        this.curentPlayerSimbol = 'x';
        this.matrix = new Array;
        for (var i = 0; i < 3; i++) {
            this.matrix[i] = new Array;
            for (var j = 0; j < 3; j++) {
                this.matrix[i][j] = null;              
            }            
        } 
    }

    getCurrentPlayerSymbol() {
        return this.curentPlayerSimbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.curentPlayerSimbol;
            if(this.curentPlayerSimbol == 'x') this.curentPlayerSimbol = 'o';
            else this.curentPlayerSimbol = 'x';
         }

    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner()) return true;
        return false;
    }

    getWinner() {
        var arr = this.matrix;
        if ((arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) || (arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2])) return arr[1][1];
        if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2]) return arr[0][0];
        if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2]) return arr[1][0];
        if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2]) return arr[2][0];
        if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) return arr[0][0];
        if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) return arr[0][1];
        if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) return arr[0][2];
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) return false;
            }            
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
