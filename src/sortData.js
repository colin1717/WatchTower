export function sortData(data) {
  console.log('sortData is running');
  let sortedData = {};

  sortedData["Last Modified"] = this.findImplementation(data);
  sortedData["Production Container URL"] = this.findProdContainerPage(data);
  sortedData["Staging Container URL"] = this.findStagingContainerPage(data);
  sortedData["Javascript URL"] = this.findBVLoader(data);
  sortedData["BVRRSummary Container Loading"] = this.findBVRRSummary(data);
  sortedData["BVRRSummary Container Has Content"] = this.findBVRRSummaryPopulating(data);
  sortedData["BVRR Container Loading"] = this.findBVRR(data);
  sortedData["BVRR Container Has Content"] = this.findBVRRPopulating(data);
  sortedData["BVQA Container Loading"] = this.findBVQA(data);
  sortedData["BVQA Container Has Content"] = this.findBVQAPopulating(data);
  sortedData["SEO Content Loading"] = this.findSEO(data);
  sortedData["SEO Pagination Working"] = this.findSEOPagination(data);

  console.log(sortedData);
  return sortedData;
}

export function findImplementation(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "Last Modified") {
      return data[i];
    }
  }
}
export function findProdContainerPage(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "Production Container URL"){
      return data[i];
    }
  }
}
export function findStagingContainerPage(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "Staging Container URL") {
      return data[i];
    }
  }
}

export function findBVLoader(data) {
  for (var i = 0; i < data.length; i++)  {
    if (data[i].title === "Javascript URL") {
      return data[i];
    }
  }
}

export function findBVRRSummary(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVRRSummary Container Loading") {
      return data[i].status;
    }
  }
}

export function findBVRRSummaryPopulating(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVRRSummary Container Has Content") {
      return data[i].status;
    }
  }
}

export function findBVRR(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVRR Container Loading") {
      return data[i].status;
    }
  }
}

export function findBVRRPopulating(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVRR Container Has Content") {
      return data[i].status;
    }
  }
}

export function findBVQA(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVQA Container Loading") {
      return data[i].status;
    }
  }
}

export function findBVQAPopulating(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "BVQA Container Has Content") {
      return data[i].status;
    }
  }
}

export function findSEO(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "SEO Content Loading") {
      return data[i].status;
    }
  }
}

export function findSEOPagination(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].title === "SEO Pagination Working") {
      return data[i].status;
    }
  }
}
