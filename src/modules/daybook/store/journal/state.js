// el state es reactivo, cuando este sea modificado vuex se va a encargar de informar a todos los 
// componentes y modulos que hagan uso de sus datos para que sean actualizados

export default () => ({
    isLoading: true,
    entries: [],
})


/*
  entries: 
  [
      {
          id: '1',//new Date().getTime(),
          date: new Date().toString(),
          picture: null,
          text: 'Nostrud ea id ex reprehenderit cillum officia consequat ipsum veniam. Quis ex incididunt veniam anim magna dolor ut dolore. Dolor elit in deserunt laborum velit proident laborum reprehenderit. Ad Lorem culpa cillum laborum cupidatat nulla eu id.'
      },
      {
        id: '2',
        date: new Date().toString(),
        picture: null,
        text: 'Elit anim aliqua sunt sint excepteur voluptate cillum enim. Lorem eu cillum magna reprehenderit mollit cillum esse ea fugiat consequat ipsum pariatur id. Ut excepteur est mollit aliquip ullamco consectetur aliquip minim sunt minim cupidatat sunt. Ipsum magna do cillum dolore sunt. Id qui quis ea mollit dolore ipsum labore voluptate.'
      },
      {
        id: '3',
        date: new Date().toString(),
        picture: null,
        text: 'Anim laboris sint Lorem proident do tempor Lorem sunt magna voluptate consectetur labore anim. Lorem duis commodo laborum minim eu duis id in reprehenderit ut magna deserunt anim est. In excepteur officia et occaecat labore. Enim aliqua dolore enim nisi esse magna deserunt quis aute.'
      },
  ]
*/