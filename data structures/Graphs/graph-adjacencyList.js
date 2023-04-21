
class Graph{
    constructor(){
        this.adjacencyList = {};
        this.numberOfNodes = 0;
    }

    addVertex(node){
        this.adjacencyList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2){
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections(){
        //console.log(this.adjacencyList['A'])
        //console.log(...this.adjacencyList['A'])
        const nodes = Object.keys(this.adjacencyList);
        nodes.forEach((node)=>{
            let nodeConnections = this.adjacencyList[node];
            let connections = '';
            ///one way to print
            // for(let vertex of nodeConnections){
            //     connections += vertex + ' ';
            // }
            //console.log(node,'-->',connections);
            ///

            ///2nd way
            //connections += [...nodeConnections];
            //console.log(node,'-->',connections);
            ///

            ///3rd way
            console.log(node,'-->',...nodeConnections)
            ///
        });
       
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('B','D');
graph.addEdge('D','C');
graph.addEdge('C','E');
graph.showConnections();
