using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using Livraria.Models;

namespace Library.Controllers
{
    public class DataController : ApiController
    {
        private readonly LivrariaEntities livrariaEntities = new LivrariaEntities();

        // GET api/data
        public IEnumerable<Livro> Get()
        {
            var books = livrariaEntities.Livro.OrderBy(e => e.Titulo).ToList();
            return books;
        }

        // DELETE api/data/{id}
        public void Delete(int id)
        {
            var book = livrariaEntities.Livro.FirstOrDefault(x => x.Id == id);
            livrariaEntities.Livro.Remove(book);
            livrariaEntities.SaveChanges();
        }
    }
}
