./client/fleet create

./client/fleet register-vehicle 1 'FR-0000'
./client/fleet register-vehicle 1 'FR-0001'
./client/fleet register-vehicle 1 'FR-0002'

./client/fleet localize-vehicle 1 'FR-0000' 150 -150
./client/fleet localize-vehicle 1 'FR-0001' 150 -120 32
./client/fleet localize-vehicle 1 'FR-0002' 300 -3000 2500

./client/fleet get 1
