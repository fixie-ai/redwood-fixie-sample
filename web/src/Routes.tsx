// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/low-level-api" page={LowLevelApiPage} name="lowLevelApi" />
      <Route path="/use-fixie" page={UseFixiePage} name="useFixie" />
      <Route path="/controlled-floating-embed" page={ControlledFloatingEmbedPage} name="controlledFloatingEmbed" />
      <Route path="/floating-embed" page={FloatingEmbedPage} name="floatingEmbed" />
      <Route path="/inline-embed" page={InlineEmbedPage} name="inlineEmbed" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
