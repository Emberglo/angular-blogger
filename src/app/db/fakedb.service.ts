import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakedbService {

  constructor() { }

  getPosts() {
    return [
      {
        title: 'My First Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'ryan@blogger.com',
        picture: 'https://images.unsplash.com/photo-1581665611754-08d420f9590f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
        published: true
      },
      {
        title: 'Random Thoughts',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'bob@blogger.com',
        picture: 'https://images.unsplash.com/photo-1612515748614-b565d0a95da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        published: true
      },
      {
        title: 'What I Do On Wednesdays',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'jerry@blogger.com',
        picture: 'https://images.unsplash.com/photo-1564903955735-4cd3dfcfdfb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
        published: true
      },
      {
        title: 'Shut Up Jerry',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'rick@blogger.com',
        picture: 'https://images.unsplash.com/photo-1612481150458-f86f618807f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        published: true
      },
      {
        title: 'Oh Jeez, Rick',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'morty@blogger.com',
        picture: 'https://images.unsplash.com/photo-1612441241179-5adb3c580140?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1448&q=80',
        published: true
      },
      {
        title: 'Wow Guys',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Tempus iaculis urna id volutpat lacus. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Ornare massa eget egestas purus viverra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Turpis massa tincidunt dui ut ornare lectus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.',
        creatorEmail: 'ryan@blogger.com',
        picture: 'https://images.unsplash.com/photo-1612387030431-eea5079a88b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        published: true
      }
    ]
  }


}
