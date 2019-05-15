const STORAGE_VERSION = '1.0.1';

class LocalStorage {
  constructor() {
    const version = this.getItem('version');
    if (version === null) {
      this.setItem('version', STORAGE_VERSION);
      return;
    }

    if (version !== STORAGE_VERSION) {
      window.localStorage.clear();
      this.setItem('version', STORAGE_VERSION);
    }
  }

  getItem = (key) => {
    let data = window.localStorage.getItem(key);
    if (data !== null) {
      try {
        data = JSON.parse(data);
      } catch (e) {
        console.error(`Failed to parse JSON string from localStorage for key: ${key}`);
      }
    }

    return data;

  };

  setItem = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };
}

export default new LocalStorage();
