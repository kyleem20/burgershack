import { BadRequest } from '../utils/Errors'

// NOTE THIS IS JUST FOR TODAY
const FakeDB = {
  burgers: [
    {
      name: 'Plain Burger',
      id: '0'
    },
    {
      name: 'Cheese Burger',
      id: '1'
    },
    {
      name: 'Bacon Cheese Burger',
      id: '2'
    },
    {
      name: 'Double Patty Cheese Burger',
      id: '3'
    },
    {
      name: 'Veggie Burger',
      id: '4'
    },
    {
      name: 'Hamburger',
      id: '5'
    },
    {
      name: 'Bread',
      id: '6'
    },
    {
      name: 'Lettuce Wrap',
      id: '7'
    }
  ]
}

class BurgersService {
  // async createCat(catData) {
  //   // give the cat an Id on insertion
  //   catData.id = FakeDB.cats.length.toString()
  //   await FakeDB.cats.push(catData)
  //   // NOTE just for today we are returning the data literally
  //   return catData
  // }

  // async getAllCats() {
  //   // NOTE you normally want await here cause the DB is held somewhere else
  //   const cats = await FakeDB.cats
  //   return cats
  // }

  // async editCat(id, updatedCat) {
  //   const catIndex = await FakeDB.cats.findIndex(c => c.id === id)
  //   if (catIndex === -1) {
  //     throw new BadRequest('no cat by that id')
  //   }
  //   FakeDB.cats.splice(catIndex, 1, updatedCat)
  //   return updatedCat
  // }

  // async deleteCat(id) {
  //   const catIndex = await FakeDB.cats.findIndex(c => c.id === id)
  //   if (catIndex === -1) {
  //     throw new BadRequest("can't delete a cat that is already not there... partner")
  //   }
  //   FakeDB.cats.splice(catIndex, 1)
  //   return 'delorted'
  // }
}

export const burgersService = new BurgersService()
