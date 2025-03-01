const bellmanFord = (edgeList, n, src) => {
    const distance = Array(n).fill(Infinity);
    distance[src] = 0;

    for (let i = 0; i < n - 1; i++) {
        let updated = false;
        for (const [ from, to, cost ] of edgeList) {
            if(distance[from] !== Infinity && distance[from] + cost < distance[to]) {
                distance[to] = distance[from] + cost;
                updated = true;
            }
        }
        if (!updated) break; 
    }

    return distance;
};