import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {

  createDb() {
    let innerHtml = [
      {
        id: 1,
        myInnerHtml: '<h1>First Line</h1><br/>Second Line<br/>'
      },
      {
        id: 2,
        myInnerHtml: 'First Line<br/>Second Line<br/>'
      }
    ];

    return { innerHtml };
  }

}

