class Product {
    constructor(){
        this.id = 1
        this.arrayProducts = [];
    }

    add() {
        let product = this.readData()
        if(this.validateContainsData(product) == true) {
            this.save(product)
        }

        this.list()
        this.cancel()
       
    }

    readData() {
        let product = {}
        product.id = this.id
        product.productName = document.getElementById('product_name').value
        product.productValue = document.getElementById('product_value').value

        return product
    }

    validateContainsData(product) {
        let msg = ''

        if(product.productName == "") {
            msg += 'Por favor, insira corretamente o nome do Produto \n'
        }

        if(product.productValue == "") {
            msg += 'Por favor, insira corretamente o valor do Produto'
        }

        if(msg != "") {
            alert(msg)
            return false
        }

        return true
    }

    save(product) {
        this.arrayProducts.push(product)
        this.id++;
    }

    list() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ""

        for(let i = 0; i < this.arrayProducts.length; i++) {
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_name = tr.insertCell()
            let td_value = tr.insertCell()
            let td_action = tr.insertCell()

            td_id.innerText = this.arrayProducts[i].id
            td_name.innerText = this.arrayProducts[i].productName
            td_value.innerText = `R$ ${this.arrayProducts[i].productValue}`
            let image = document.createElement('img')
            image.src = './assets/images/delete.png'
            image.setAttribute('onclick', 'product.delete(' + this.arrayProducts[i].id+')')
            td_action.appendChild(image)
        }
    }

    cancel() {
        document.getElementById('product_name').value = ''
        document.getElementById('product_value').value = ''
    }

    delete(id) {
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProducts.length; i++ ) {
             if(this.arrayProducts[i].id == id) {
                this.arrayProducts.splice(i, 1)
                tbody.deleteRow(i)
             }
        }

        alert('O item foi apagado com sucesso!')
    }


}

const product = new Product();  