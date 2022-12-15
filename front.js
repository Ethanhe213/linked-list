class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class SLL{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    addFront(value){
        let Newnode=new Node(value)
        if(!this.head){
            this.head=Newnode
            this.tail=this.head
        }
        else{
            Newnode.next=this.head
            this.head=Newnode

        }
        this.length++
        return this
    }
    removeFront(){
        if(!this.head){
            return undefined
        }
        else{
            
            this.head=this.head.next
        }
        this.length--
        if(this.length===0){
            this.tail=null
        }

        return this
    }
    Front(){
        if(!this.head){
            return null
        }
        return this.head
    }
    Display(){
        let list=[]
        let runner=this.head
        while(runner!=null){
            list.push(runner.data)
            runner=runner.next

        }
        return list
    }
    Max(){
        let max=this.head.data
        let runner=this.head
        while(runner!=this.tail){

            runner=runner.next
            if(max<runner.data){
                max=runner.data
            }
            else{max=max}
            
        }
        return max
    }
    Min(){
        let min=this.head.data
        let runner=this.head
        while(runner!=this.tail){

            runner=runner.next
            if(min>runner.data){
                min=runner.data
            }
            else{min=min}
            
        }
        return min
    }
    Sum(){
        let sum=0
        let runner=this.head
        while(runner!=null){
            sum+=runner.data
            runner=runner.next
        }
        return sum
    }
    Average(){
        return this.Sum()/this.length
    }
    Pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head
        var newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail=newTail
        this.tail.next=null
        this.length--
        if(this.length==0){

            this.head=null
            this.tail=null
        }
        return this

    }
    addBack(value){
        let newNode=new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++

        return this
    }
    findindex(value){
        let counter=0
        let runner=this.head
        while(runner!=null){{
            if(runner.data!=value){
                runner=runner.next
                counter++
            }
            }
        return counter
    }
    }
}
var SLL1 = new SLL()
SLL1.addFront(10)
SLL1.addFront(2)
SLL1.addFront(8) 
SLL1.addFront(20)
console.log(SLL1.findindex(20))
