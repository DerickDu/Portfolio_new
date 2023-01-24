const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://github.com/DerickDu/Portfolio_new" className="hover:text-pink-600">
            DerickDu
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
