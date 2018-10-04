module.exports = function solveSudoku(matrix) {
 

    function prufCol(matrix, col, num) 
      {for (let i=0; i<9; i++){
             if (matrix[i][col]==num){return false;}
      } 
         return true;
     }
     
     function prufRow(matrix, row, num) 
      {for (let j=0; j<9; j++){
             if (matrix[row][j]==num){return false;}
      } 
      return true;}
     
       
      function prufSqr(matrix, row, col, num) 
      { let iRow=Math.floor(row/3)*3;
        let jCol=Math.floor(col/3)*3;
        for (let i=iRow; i<iRow+3; i++){
         for (let j=jCol; j<jCol+3; j++){
            if (matrix[i][j]== num){return false;}
         }  
        }
      return true;}
     
     
    for (let row=0; row<9; row++){
        for (let col=0; col<9; col++){
            if (matrix[row][col]==0){
     
                for (let num=1; num<10; num++){
                  if (prufCol(matrix, col, num)&&prufRow(matrix, row, num)&&prufSqr(matrix, row, col, num))
                   {   matrix[row][col]=num;
                    if (solveSudoku(matrix)){ return matrix;}
                  
                  matrix[row][col]=0;
                   }   
                 }
             
               return false;
             }
         }
     
     }  return true;
     
   
 }
 