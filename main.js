const app = Vue.createApp({
    data(){
        return {
            
            values:[null,null,null,null,null,null,null,null,null],
            res:0,
            display:"none",
            winner:-1,
            symbols:['❌','⭕'],
            checks:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
            scores:[0,0],
            counter:0
        }
    },
    methods:{
        updateValue(ind){
            if(this.winner==-1 && this.values[ind]==null){
                this.values[ind]=this.res
                this.res^=1
                
                this.checkOver()
               
                
                this.counter+=1
             
                if(this.counter==9){
                    this.display=""
                    this.winner=0
                }
            
            }
            
        },
        checkOver(){
         
            for(let check of this.checks){
              
                notfound=false
                el=this.values[check[0]]
                
                if(el!=null){
                    for(let c of check){
                        
                        if(this.values[c]!=el){
                            
                            notfound=true
                            break
                        }
                        
                        
                        
                    }
                    
                    if(!notfound){
        
                        this.display=""
                        this.winner=el+1
                        this.scores[el]+=1
                        this.counter=0
                        break
                    }
                }
                
                
            }
            
          
            
        },
        reset(){
            for(let ind in this.values){
                this.values[ind]=null
            }
            this.display="none"
            this.res=0
            this.counter=0
            this.winner=-1
        }
        
    },
    

})

