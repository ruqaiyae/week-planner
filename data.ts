interface Data {
  entries: Entry[];
  editing: Entry | null;
}

const data = readData();

function writeData(): undefined
{
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

function readData(): Data
{
  if (localStorage.getItem('data-storage'))
  {
    const parsedJSON = JSON.parse(localStorage.getItem('data-storage') || '[]');
    return parsedJSON;
  }
  else
  {
    return {entries:[], editing:null};
  }
}
