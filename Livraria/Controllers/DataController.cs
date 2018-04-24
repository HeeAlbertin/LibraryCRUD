using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using Livraria.Models;
using System.Data.Entity;
using System.Net;

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

        // GET api/data/{id}
        public Livro GetOne(int id)
        {
            var book = livrariaEntities.Livro.Find(id);
            return book;
        }

        // DELETE api/data/{id}
        public IHttpActionResult Delete(int id)
        {
            var book = livrariaEntities.Livro.FirstOrDefault(x => x.Id == id);
            livrariaEntities.Livro.Remove(book);
            livrariaEntities.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/data
        public IHttpActionResult Create([FromBody] Livro newBook)
        {
            livrariaEntities.Livro.Add(newBook);
            livrariaEntities.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // PUT api/data/{id}
        [AcceptVerbs("PUT", "HEAD")]
        public IHttpActionResult Update(int id, [FromBody] Livro editBook)
        {
            if (id != editBook.Id)
            {
                return BadRequest();
            }

            livrariaEntities.Entry(editBook).State = EntityState.Modified;
            livrariaEntities.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
