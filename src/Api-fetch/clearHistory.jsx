function clearHistory(history) {
  const stringMe = history.map(request => `${request.method}-${request.url}`);
  const stringy = [...new Set(stringMe)];
  return stringy.map(request => {
    const split = request.split('-');
    return {
      url: split[1],
      method: split[0]
    };
  });
}

export default clearHistory;
