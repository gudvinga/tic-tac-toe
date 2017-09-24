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
        // return true;
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
