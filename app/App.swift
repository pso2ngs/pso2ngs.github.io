import SwiftUI

struct ContentView: View {
    
    init(){
        UITableView.appearance().backgroundColor = UIColor.gray
    }
    
    var body: some View {
        List{
            Text("EVA")
            Text("EVA")
            Text("EVA")
        }
    }
}
