module.exports = function solveSudoku(matrix) {
 

    function pruf(matrix, col, num, row) 
    {let f=0;
        for (let i=0; i<9; i++){
        if (matrix[i][col]==num){f=1;} } 
    
     for (let j=0; j<9; j++){
        if (matrix[row][j]==num){f=1;} } 

    let iRow=Math.floor(row/3)*3;
    let jCol=Math.floor(col/3)*3;
    for (let i=iRow; i<iRow+3; i++){
      for (let j=jCol; j<jCol+3; j++){
        if (matrix[i][j]== num){f=1}
    }  
   }
  if (f==0) return true;
  if (f==1) return false;}


    
     
      
   
    
    
   for (let row=0; row<9; row++){
       for (let col=0; col<9; col++){
           if (matrix[row][col]==0){
    
               for (let num=1; num<10; num++){
                 if (pruf(matrix, row, col, num))
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
    
    
    